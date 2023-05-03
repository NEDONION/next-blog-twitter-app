
# A Twitter clone App with React and Next.js

![](./demo-next-app-twitter-clone.png)

## Requisites

- Typescript
- React.js
- Next.js
- TailwindCSS
- Prisma (ORM)
- MongoDB (Database)
- Node.js (Backend)


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NEDONION/next-blog-twitter-app.git
```

### 2. Install dependencies

```bash
# recommended to use npm
npm install

# install prisma 
prisma generate

```

### 3. Edit .env file

- Connect to MongoDB Cloud Server. Refer to [prisma/database-connectors-mongodb](https://www.prisma.io/docs/concepts/database-connectors/mongodb).
- Replace the following `DATABASE_URL` with your own MongoDB URL.

```bash
DATABASE_URL="mongodb://USERNAME:PASSWORD@HOST/DATABASE"
NEXTAUTH_JWT_SECRET="NEXTAUTH_JWT_SECRET"
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
```

### 4. Run the project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma Setup

```bash
npx prisma init

# make sure to have your current IP address in whitelist
npx prisma db push 

# install prisma client
npm install @prisma/client
```

## Debugging

```typescript
// Due to unknown version reasons, we cannot use unfollow and unlike features.
// Not sure what is the cause of it not working in newer versions
// root cause is below, refer to youtube comments at the end of april.

// instead of using this:
const { postId } = req.body;
// replace to the following below. Same changes for userId:
const postId = req.method === 'POST' ? req.body.postId : req.query.postId;


// then, instead of using this in useFollow hooks:
request = () => axios.delete('/api/follow', { data: { userId } });
// replace to the following below. Same changes for useLike hooks
request = () => axios.delete('/api/follow', { params: { userId } });
```