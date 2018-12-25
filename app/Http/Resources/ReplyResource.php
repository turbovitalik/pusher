<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'reply' => $this->body,
            'user' => $this->user->name,
            'question_slug' => $this->question->slug,
            'user_id' => $this->user->id,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}