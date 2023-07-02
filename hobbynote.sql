CREATE TABLE "brands" (
  "id" int PRIMARY KEY,
  "country_id" int,
  "brand_name" jsonb
);

CREATE TABLE "colors" (
  "id" int PRIMARY KEY,
  "color" jsonb,
  "color_name" jsonb,
  "order" int UNIQUE
);

CREATE TABLE "countries" (
  "id" int PRIMARY KEY,
  "code" text UNIQUE NOT NULL,
  "country_name" jsonb
);

CREATE TABLE "items" (
  "id" int PRIMARY KEY,
  "category_id" int
);

CREATE TABLE "item_categories" (
  "id" integer PRIMARY KEY,
  "category_name" jsonb,
  "parent_id" int,
  "order" int
);

CREATE TABLE "pencils" (
  "item_id" int PRIMARY KEY,
  "brand_id" int NOT NULL,
  "code" text,
  "pencil_name" jsonb,
  "rgb" jsonb,
  "series_id" int,
  "order" int,
  "color_id" int,
  "inv_qty" int,
  "wish_qty" int
);

CREATE TABLE "floss" (
  "item_id" into PRIMARY KEY,
  "brand_id" int NOT NULL,
  "code" text,
  "floss_name" jsonb,
  "rgb" jsonb,
  "order" int,
  "color_id" int,
  "inv_qty" int,
  "wish_qty" int
);

CREATE TABLE "embroidery_design" (
  "id" int PRIMARY KEY,
  "title" text,
  "finished_image" text,
  "pattern_image" text,
  "book_title" text,
  "website_url" text,
  "notes" text
);

CREATE TABLE "embroidery_design_floss" (
  "design_id" int,
  "floss_id" int
);

CREATE TABLE "tags" (
  "id" int PRIMARY KEY,
  "tag_name" jsonb
);

CREATE TABLE "pigments" (
  "id" int PRIMARY KEY,
  "name" text NOT NULL
);

ALTER TABLE "brands" ADD FOREIGN KEY ("country_id") REFERENCES "countries" ("id");

ALTER TABLE "items" ADD FOREIGN KEY ("category_id") REFERENCES "item_categories" ("id");

ALTER TABLE "item_categories" ADD FOREIGN KEY ("parent_id") REFERENCES "item_categories" ("id");

ALTER TABLE "pencils" ADD FOREIGN KEY ("item_id") REFERENCES "items" ("id");

ALTER TABLE "pencils" ADD FOREIGN KEY ("brand_id") REFERENCES "brands" ("id");

ALTER TABLE "pencils" ADD FOREIGN KEY ("color_id") REFERENCES "colors" ("id");

ALTER TABLE "floss" ADD FOREIGN KEY ("item_id") REFERENCES "items" ("id");

ALTER TABLE "floss" ADD FOREIGN KEY ("brand_id") REFERENCES "brands" ("id");

ALTER TABLE "floss" ADD FOREIGN KEY ("color_id") REFERENCES "colors" ("id");

ALTER TABLE "embroidery_design_floss" ADD FOREIGN KEY ("design_id") REFERENCES "embroidery_design" ("id");

ALTER TABLE "embroidery_design_floss" ADD FOREIGN KEY ("floss_id") REFERENCES "floss" ("item_id");
