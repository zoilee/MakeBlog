package com.zoile.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zoile.backend.entity.Post;
import com.zoile.backend.entity.PostFile;
import com.zoile.backend.repository.PostFileRepository;
import com.zoile.backend.repository.PostRepository;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostFileRepository postFileRepository;

    // crud 만들기
    public List<Post> getAllPost() {
        List<Post> posts = postRepository.findAll();
        posts.forEach(post -> {
            Optional<PostFile> firstImg = postFileRepository.findFirstImageByNtime(post.getNtime());
            post.setFirstImg(firstImg.map(PostFile::getNfilename).orElse(null));
        });
        return posts;
    }

    public Optional<Post> getPostByPost(String post) {
        return postRepository.findByPost(post);
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    public Post updatePost(Long id, Post updatePost) {
        return postRepository.findById(id).map(existingPost -> {
            existingPost.setPost(updatePost.getPost());
            existingPost.setCategory(updatePost.getCategory());
            existingPost.setTitle(updatePost.getTitle());
            existingPost.setContent(updatePost.getContent());
            existingPost.setHashtag(updatePost.getHashtag());
            return postRepository.save(existingPost);
        }).orElseThrow(() -> new RuntimeException(id + "th update error"));
    }
}
