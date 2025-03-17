# Modern Swagger Theme

A sleek, contemporary theme for Swagger UI that prioritizes both aesthetics and functionality. Transform your API documentation with minimal effort.

## Installation

```bash
npm install modern-swagger-theme
```

## Usage

This package exports `customCss` and `customJsStr` strings that seamlessly integrate with most Swagger UI implementations.

### NestJS Integration

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { customJs, customCss } from "modern-swagger-theme";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("API Example")
    .setDescription("Example API using Modern Swagger Theme")
    .setVersion("1.0.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("docs", app, document, {
    customCss: customCss,
    customJsStr: customJs,
  });

  await app.listen(3000);
}

bootstrap();
```

### Express Integration

```ts
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";

import { customCss, customJs } from "modern-swagger-theme";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Example",
      version: "1.0.0",
      description: "Example API using Modern Swagger Theme",
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

const app = express();
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    customCss: customCss,
    customJsStr: customJs,
  })
);

app.listen(3000);
```

## Key Features

- Modern visual design
- Improved readability
- Simple integration process

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
