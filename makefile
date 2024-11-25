.PHONY: build up down

build:
	docker compose --profile development up --build -d
up:
	docker compose --profile development up -d
down:
	docker compose --profile development down
	docker image prune -a -f
	if exist backend\dist rmdir /s /q backend\dist
	if exist backend\node_modules rmdir /s /q backend\node_modules
	if exist frontend\node_modules rmdir /s /q frontend\node_modules