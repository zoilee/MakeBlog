package com.zoile.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zoile.backend.entity.PostComment;

public interface PostCommentRepository extends JpaRepository<PostComment, Long> {

    // post_id 기본으로 검색
    List<PostComment> findAllByPostId(Long id);

}
