/*
 * Copyright (C) 2021 Baidu, Inc. All Rights Reserved.
 */
package com.baidu.brcc.service.impl;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.baidu.brcc.dao.ApiTokenMapper;
import com.baidu.brcc.dao.base.BaseMapper;
import com.baidu.brcc.domain.ApiToken;
import com.baidu.brcc.domain.ApiTokenExample;
import com.baidu.brcc.domain.em.Deleted;
import com.baidu.brcc.service.ApiTokenService;
import com.baidu.brcc.service.base.GenericServiceImpl;
import com.baidu.brcc.utils.time.DateTimeUtils;

@Service("apiTokenService")
public class ApiTokenServiceImpl extends GenericServiceImpl<ApiToken, Long, ApiTokenExample>
        implements ApiTokenService {

    @Autowired
    private ApiTokenMapper apiTokenMapper;

    @Override
    public BaseMapper<ApiToken, Long, ApiTokenExample> getMapper() {
        return apiTokenMapper;
    }

    @Override
    public ApiTokenExample newExample() {
        return ApiTokenExample.newBuilder().build();
    }

    @Override
    public ApiTokenExample newIdInExample(List<Long> ids) {
        return ApiTokenExample.newBuilder().build().createCriteria().andIdIn(ids).toExample();
    }

    @Override
    public Long save(String token, Long projectId, String projectName) {
        ApiToken apiToken = new ApiToken();
        Date now = DateTimeUtils.now();
        apiToken.setCreateTime(now);
        apiToken.setUpdateTime(now);
        apiToken.setDeleted(Deleted.OK.getValue());
        apiToken.setProjectId(projectId);
        apiToken.setProjectName(projectName);
        apiToken.setToken(token);
        insertSelective(apiToken);
        return apiToken.getId();
    }

    @Override
    public ApiToken selectByToken(String token) {
        return selectOneByExample(ApiTokenExample.newBuilder()
                .build()
                .createCriteria()
                .andDeletedEqualTo(Deleted.OK.getValue())
                .andTokenEqualTo(token)
                .toExample()
        );
    }

    @Override
    public List<ApiToken> selectByProjectId(Long projectId, String... columns) {
        if (projectId == null || projectId <= 0) {
            return null;
        }
        return selectByExample(ApiTokenExample.newBuilder()
                        .build()
                        .createCriteria()
                        .andDeletedEqualTo(Deleted.OK.getValue())
                        .andProjectIdEqualTo(projectId)
                        .toExample(),
                columns
        );
    }

    @Override
    public int deleteByIds(Collection<Long> ids) {
        if (CollectionUtils.isEmpty(ids)) {
            return 0;
        }
        ApiToken apiToken = new ApiToken();
        apiToken.setUpdateTime(new Date());
        apiToken.setDeleted(Deleted.DELETE.getValue());
        return updateByExampleSelective(apiToken, ApiTokenExample.newBuilder()
                .build()
                .createCriteria()
                .andIdIn(ids)
                .toExample()
        );
    }
}
