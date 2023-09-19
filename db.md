1. Create a new migration file:

```
pnpm migration:create ./src/dbs/migrations/?
```

e.g. create a new migration file named: "user". we execute:

```
    pnpm migration:create ./src/dbs/migrations/user
```

2. Generate migration:

```
pnpm migration:generate src/db/migrations/?
```

3. Run the migrations

```
pnpm migration:run ./src/db/migrations
```

4. Run the migrations

```
pnpm migration:revert
```
