package main

import (
	"log/slog"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/httplog/v2"
)

func main() {
	// Logger
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

	r := chi.NewRouter()
	r.Use(httplog.RequestLogger(logger, []string{"/ping"}))
	// A good base middleware stack
	r.Use(middleware.Logger)
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Heartbeat("/ping"))
	// curl localhost:3000
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	r.Get("/info", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("info..."))
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
	http.ListenAndServe(":3000", r)
}
