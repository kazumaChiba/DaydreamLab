<?php
namespace DaydreamLab\Cms\Models\Menu;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;
use Kalnoy\Nestedset\NodeTrait;

class Menu extends BaseModel
{
    use NodeTrait;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menus';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'ordering',
        'path',
        'category_id',
        'state',
        'description',
        'language',
        'params',
        'metadata',
        'metakeywords',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'publish_up',
        'publish_down',
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        '_lft',
        '_rgt'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'category',
        'viewlevels'
    ];


    protected $casts = [
        'params'   => 'array'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }


    public function getCategoryAttribute()
    {
        return $this->category()->first();
    }


    public function getViewlevelsAttribute()
    {
        return $this->viewlevel()->first()->rules;
    }


    public function viewlevel()
    {
        return $this->hasOne(Viewlevel::class, 'id', 'access');
    }
}