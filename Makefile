db-generate: 
	yarn prisma generate
db-push: 
	yarn prisma db push
clean-dev:
	 rm -rd ./node_modules; yarn; yarn dev

.PHONY: db-generate db-push clean-dev

