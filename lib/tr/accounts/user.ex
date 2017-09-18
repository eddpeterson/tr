defmodule Tr.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Tr.Accounts.User
  alias Tr.Accounts.{User, Credential}


  schema "users" do
    field :name, :string
    has_one :credential, Credential

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
