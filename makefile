.PHONY: up down

up:
	docker compose --profile development up --build -d
down:
	docker compose --profile development down
