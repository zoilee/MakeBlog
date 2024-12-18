package com.zoile.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zoile.backend.entity.PostFile;
import com.zoile.backend.repository.PostFileRepository;

@Service
public class PostFileService {
    @Autowired
    private PostFileRepository postFileRepository;

    public List<PostFile> getFilesByNtime(Long ntime) {
        return postFileRepository.findAllByNtime(ntime);
    }

    // 저장
    public PostFile saveFile(PostFile file) {
        return postFileRepository.save(file);
    }

    // 수정을 위한 파일 가져오기
    public Optional<PostFile> getFileById(Long id) {
        return postFileRepository.findById(id);
    }

    // 삭제
    public void deleteFileBy(Long id) {
        postFileRepository.deleteById(id);
    }

    // 목록 삭제
    public void deleteFileByNtime(Long ntime) {
        postFileRepository.deleteFileByNtime(ntime);
    }

}
