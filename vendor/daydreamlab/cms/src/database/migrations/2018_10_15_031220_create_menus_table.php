<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('alias');
            $table->nestedSet();
            $table->unsignedInteger('ordering')->nullable();
            $table->string('path');
            $table->unsignedInteger('category_id')->nullable();
            $table->tinyInteger('state')->default(1);
            $table->text('description')->nullable();
            $table->unsignedInteger('access')->nullalbe()->default(1);

            $table->string('language')->nullable()->default('All');
            $table->text('params')->nullable();
            $table->text('metadata')->nullable();
            $table->text('metakeywords')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}
