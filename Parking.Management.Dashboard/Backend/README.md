# Parking Management Dashboard (Backend)

**Drive Domain Design (DDD), Clean-Architecture, SOLID**

## Stacks

**Back-end:** Node, Express, Prisma

### Initialize Project

```bash
    yarn init -y
```

### Install TypeScript, Prisma, Dotenv & Express

```bash
    yarn add prisma @prisma/client typescript @types/node @types/express -D
```

### Initialize Typescript

```bash
    npx tsc --init
```

### Initialize Prisma

```bash
    yarn prisma init
```

### Create Prisma Migration

```bash
    yarn prisma migrate dev
```

### Possible project folder structure in Domain Driven Design (DDD)

```bash
    src/
    |-- domain/
    |   |-- entities/
    |   |-- value-objects/
    |   |-- enums/
    |   |-- aggregates/
    |   |-- services/
    |-- application/
    |   |-- use-cases/
    |   |-- interfaces/
    |   |-- dtos/
    |   |-- services/
    |   |-- mappers/
    |   |-- validators/
    |-- infrastructure/
    |   |-- persistence/
    |   |-- external-services/
    |-- interfaces/
    |   |-- controllers/
    |   |-- routes/
    |   |-- middlewares/
    |-- utils/
    |-- tests/

```
