package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	// Logger
	/*
		logger := httplog.NewLogger("httplog-example", httplog.Options{
			LogLevel: slog.LevelDebug,
			// JSON:             true,
			Concise: true,
			// RequestHeaders:   true,
			// ResponseHeaders:  true,
			MessageFieldName: "message",
			LevelFieldName:   "severity",
			TimeFieldFormat:  time.RFC3339,
			Tags: map[string]string{
				"version": "v1.0-81aa4244d9fc8076a",
				"env":     "dev",
			},
			QuietDownRoutes: []string{
				//"/",
				//"/ping",
			},
			QuietDownPeriod: 10 * time.Second,
			// SourceFieldName: "source",
		})
	*/

	r := chi.NewRouter()
	// r.Use(httplog.RequestLogger(logger, []string{"/ping"}))
	// A good base middleware stack
	r.Use(middleware.Logger)
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)
	// curl localhost:3000/ping
	r.Use(middleware.Heartbeat("/ping"))

	/*
		r.Use(func(next http.Handler) http.Handler {
			return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				ctx := r.Context()

				// Set a single log field
				httplog.LogEntrySetField(ctx, "user", slog.StringValue("user1"))

				// Set multiple fields
				fields := map[string]any{
					"remote": "example.com",
					"action": "update",
				}
				httplog.LogEntrySetFields(ctx, fields)
				next.ServeHTTP(w, r.WithContext(ctx))
			})
		})
	*/

	// curl localhost:3000
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})
	// curl localhost:3000/info
	r.Get("/info", func(w http.ResponseWriter, r *http.Request) {
		// oplog := httplog.LogEntry(r.Context())
		// oplog.Info("info here")
		w.Write([]byte("info..."))
	})

	// curl localhost:3000/info
	r.Get("/slow", func(w http.ResponseWriter, r *http.Request) {
		// Simulates some hard work.
		//
		// We want this handler to complete successfully during a shutdown signal,
		// so consider the work here as some background routine to fetch a long running
		// search query to find as many results as possible, but, instead we cut it short
		// and respond with what we have so far. How a shutdown is handled is entirely
		// up to the developer, as some code blocks are preemptible, and others are not.
		time.Sleep(5 * time.Second)

		fmt.Fprintf(w, "all done.\n")
	})

	r.Get("/warn", func(w http.ResponseWriter, r *http.Request) {
		// oplog := httplog.LogEntry(r.Context())
		// oplog.Warn("warn here")
		w.WriteHeader(400)
		w.Write([]byte("warn here"))
	})

	// RESTy routes for "articles" resource
	/*
		r.Route("/articles", func(r chi.Router) {
			r.With(paginate).Get("/", listArticles)                           // GET /articles
			r.With(paginate).Get("/{month}-{day}-{year}", listArticlesByDate) // GET /articles/01-16-2017

				r.Post("/", createArticle)       // POST /articles
				r.Get("/search", searchArticles) // GET /articles/search

				// Regexp url parameters:
				r.Get("/{articleSlug:[a-z-]+}", getArticleBySlug) // GET /articles/home-is-toronto

				// Subrouters:
				r.Route("/{articleID}", func(r chi.Router) {
					r.Use(ArticleCtx)
					r.Get("/", getArticle)       // GET /articles/123
					r.Put("/", updateArticle)    // PUT /articles/123
					r.Delete("/", deleteArticle) // DELETE /articles/123
				})
		})
	*/
	// http server
	server := &http.Server{Addr: "0.0.0.0:3000", Handler: r}

	// Server run context
	serverCtx, serverStopCtx := context.WithCancel(context.Background())

	// Listen for syscall signals for process to interrupt/quit
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, syscall.SIGHUP, syscall.SIGINT, syscall.SIGTERM, syscall.SIGQUIT)
	go func() {
		<-sig

		// Shutdown signal with grace period of 30 seconds
		shutdownCtx, _ := context.WithTimeout(serverCtx, 30*time.Second)

		go func() {
			<-shutdownCtx.Done()
			if shutdownCtx.Err() == context.DeadlineExceeded {
				log.Fatal("graceful shutdown timed out.. forcing exit.")
			}
		}()

		// Trigger graceful shutdown
		err := server.Shutdown(shutdownCtx)
		if err != nil {
			log.Fatal(err)
		}
		serverStopCtx()
	}()

	// Run the server
	err := server.ListenAndServe()
	if err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}

	// Wait for server context to be stopped
	<-serverCtx.Done()
}
