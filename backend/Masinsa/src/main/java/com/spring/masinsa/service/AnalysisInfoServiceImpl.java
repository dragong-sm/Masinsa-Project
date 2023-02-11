package com.spring.masinsa.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.AnalysisInfoDTO;
import com.spring.masinsa.entity.AnalysisInfo;
import com.spring.masinsa.repository.AnalysisInfoRepository;

@Service
public class AnalysisInfoServiceImpl implements AnalysisInfoService {

  @Autowired
  AnalysisInfoRepository analysisInfoRepository;

  @Override
  @Transactional
  // search by maskId which is a foreign key. if there is no analysisInfo, return null
  public AnalysisInfoDTO getAnalysisInfo(Long maskId) {
    AnalysisInfo analysisInfo = analysisInfoRepository.findByMaskId(maskId);
    if (analysisInfo == null) {
      return null;
    }
    return AnalysisInfo.entityToDTO(analysisInfo); 
  }

  //delete by maskId
  @Override
  @Transactional
  public Boolean deleteAnalysisInfo(Long maskId) {
    // if there is analysisInfo, delete it and return true
    if (analysisInfoRepository.findByMaskId(maskId) != null) {
      analysisInfoRepository.deleteByMaskId(maskId);
      return true;
    }
    // if there is no analysisInfo, return false
    return false;
  }
  

}
