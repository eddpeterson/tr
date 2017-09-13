# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tr,
  ecto_repos: [Tr.Repo]

# Configures the endpoint
config :tr, TrWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "wDyDpOFCM6MEH7n+2ewj9Ms7XWHvhSx77GzRfGfQbktEQzw7Hx0GWMmNOUHArs67",
  render_errors: [view: TrWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Tr.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
