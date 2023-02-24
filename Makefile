PROJECT_NAME=fakbook-test

build-deploy:
	@echo
	@echo "🏭Building & 🚀Deploying development services."
	@COMPOSE_DOCKER_CLI_BUILD=1 docker-compose -p $(PROJECT_NAME) up -d --build


delete:
	@echo
	@echo "🧹Deleting development services"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 docker-compose -p $(PROJECT_NAME) down -v

