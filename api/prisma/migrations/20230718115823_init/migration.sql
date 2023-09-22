-- CreateTable
CREATE TABLE "brands" (
    "id" INTEGER NOT NULL DEFAULT unique_random_id(8, 'brands'::text, 'id'::text),
    "country_id" INTEGER NOT NULL,
    "brand_name" JSONB NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colors" (
    "id" INTEGER NOT NULL DEFAULT unique_random_id(4, 'colors'::text, 'id'::text),
    "color" JSONB,
    "color_name" JSONB,
    "order" INTEGER,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "combos" (
    "id" INTEGER NOT NULL DEFAULT unique_random_id(10, 'combos'::text, 'id'::text),
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "date_created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(6),

    CONSTRAINT "combos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(2),
    "country_name" JSONB,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_categories" (
    "id" INTEGER NOT NULL DEFAULT unique_random_id(5, 'item_categories'::text, 'id'::text),
    "category_name" JSONB NOT NULL DEFAULT '{"en": ""}',
    "parent_id" INTEGER,
    "order" INTEGER,

    CONSTRAINT "item_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" INTEGER NOT NULL DEFAULT unique_random_id(10, 'items'::text, 'id'::text),
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pencils" (
    "item_id" INTEGER NOT NULL,
    "brand_id" INTEGER NOT NULL,
    "code" TEXT,
    "rgb" JSONB,
    "series_id" INTEGER,
    "pencil_name" JSONB,
    "color_id" INTEGER,
    "order" INTEGER,
    "inv_qty" INTEGER NOT NULL DEFAULT 0,
    "wish_qty" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "pencils_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "pigments" (
    "id" INTEGER NOT NULL DEFAULT unique_random_id(8, 'pigments'::text, 'id'::text),
    "name" TEXT NOT NULL,

    CONSTRAINT "pigments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "temp_pencils" (
    "code" TEXT,
    "brand_id" INTEGER,
    "rgb" JSONB,
    "color_id" INTEGER,
    "order" INTEGER,
    "pencil_name" JSONB
);

-- CreateTable
CREATE TABLE "embroidery_design" (
    "id" INTEGER NOT NULL DEFAULT unique_random_id(8, 'embroidery_design'::text, 'id'::text),
    "title" TEXT,
    "finished_image" TEXT,
    "pattern_image" TEXT,
    "book_title" TEXT,
    "website_url" TEXT,
    "notes" TEXT,
    "status_id" INTEGER,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(6),

    CONSTRAINT "embroidery_design_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "floss" (
    "item_id" INTEGER NOT NULL,
    "brand_id" INTEGER NOT NULL,
    "code" TEXT,
    "floss_name" JSONB,
    "rgb" JSONB,
    "order" INTEGER,
    "color_id" INTEGER,
    "inv_qty" INTEGER NOT NULL DEFAULT 0,
    "wish_qty" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "floss_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "code_name" JSONB,
    "order" INTEGER,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watercolors" (
    "item_id" INTEGER NOT NULL,
    "brand_id" INTEGER NOT NULL,
    "code" TEXT,
    "swatch" TEXT,
    "series_id" INTEGER,
    "paint_name" JSONB,
    "color_id" INTEGER,
    "sizes" INTEGER[],
    "order" INTEGER,
    "inv_qty" INTEGER NOT NULL DEFAULT 0,
    "wish_qty" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "watercolors_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "_PigmentToWatercolor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EmbroideryDesignToFloss" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "colors_order_idx" ON "colors"("order");

-- CreateIndex
CREATE UNIQUE INDEX "item_categories_parent_id_order_idx" ON "item_categories"("parent_id", "order");

-- CreateIndex
CREATE UNIQUE INDEX "pencils_brand_id_order_idx" ON "pencils"("brand_id", "order");

-- CreateIndex
CREATE UNIQUE INDEX "pigments_name_idx" ON "pigments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "status_order_key" ON "status"("order");

-- CreateIndex
CREATE UNIQUE INDEX "_PigmentToWatercolor_AB_unique" ON "_PigmentToWatercolor"("A", "B");

-- CreateIndex
CREATE INDEX "_PigmentToWatercolor_B_index" ON "_PigmentToWatercolor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EmbroideryDesignToFloss_AB_unique" ON "_EmbroideryDesignToFloss"("A", "B");

-- CreateIndex
CREATE INDEX "_EmbroideryDesignToFloss_B_index" ON "_EmbroideryDesignToFloss"("B");

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_country_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_categories" ADD CONSTRAINT "item_categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "item_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "item_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pencils" ADD CONSTRAINT "pencils_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pencils" ADD CONSTRAINT "pencils_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pencils" ADD CONSTRAINT "pencils_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "embroidery_design" ADD CONSTRAINT "embroidery_design_status_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "floss" ADD CONSTRAINT "floss_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "floss" ADD CONSTRAINT "floss_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "floss" ADD CONSTRAINT "floss_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watercolors" ADD CONSTRAINT "watercolors_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watercolors" ADD CONSTRAINT "watercolors_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PigmentToWatercolor" ADD CONSTRAINT "_PigmentToWatercolor_A_fkey" FOREIGN KEY ("A") REFERENCES "pigments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PigmentToWatercolor" ADD CONSTRAINT "_PigmentToWatercolor_B_fkey" FOREIGN KEY ("B") REFERENCES "watercolors"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmbroideryDesignToFloss" ADD CONSTRAINT "_EmbroideryDesignToFloss_A_fkey" FOREIGN KEY ("A") REFERENCES "embroidery_design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmbroideryDesignToFloss" ADD CONSTRAINT "_EmbroideryDesignToFloss_B_fkey" FOREIGN KEY ("B") REFERENCES "floss"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;
