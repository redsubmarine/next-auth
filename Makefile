db-generate: 
	yarn prisma generate
db-push: 
	yarn prisma db push

.PHONY: db-generate db-push