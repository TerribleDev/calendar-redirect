package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/*", func(c *fiber.Ctx) error {
		return c.Redirect("https://calendly.com/terribledev", 301)
	})

	app.Listen(":" + os.Getenv("PORT"))
}
