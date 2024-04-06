db-generate: 
	yarn prisma generate
db-push: 
	yarn prisma db push
clean-dev:
	rm -rd ./node_modules; yarn; yarn dev
db-migrate-reset:
	yarn prisma migrate reset
.PHONY: db-generate db-push clean-dev

