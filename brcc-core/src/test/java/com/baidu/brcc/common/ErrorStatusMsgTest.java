/*
 * Copyright (C) 2021 Baidu, Inc. All Rights Reserved.
 */
package com.baidu.brcc.common;

import static com.baidu.brcc.common.ErrorStatusMsg.DUP_PROJECT_NAME_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.DUP_PROJECT_NAME_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.MIS_PRODUCT_NAME_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.MIS_PRODUCT_NAME_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.MIS_PROJECT_NAME_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.MIS_PROJECT_NAME_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.PARAM_ERROR_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.PARAM_ERROR_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.PARAM_MIS_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.PARAM_MIS_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.PRIV_EXCEED_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.PRIV_EXCEED_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.PRODUCT_NOT_EXISTS_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.PRODUCT_NOT_EXISTS_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.VERSION_DEST_NOT_EXISTS_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.VERSION_DEST_NOT_EXISTS_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.VERSION_SRC_NOT_EXISTS_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.VERSION_SRC_NOT_EXISTS_STATUS;

import org.junit.Assert;
import org.junit.Test;

public class ErrorStatusMsgTest {

    @Test
    public void testErrorStatusMsg() {
        // 参数缺失
        Assert.assertEquals(Integer.valueOf("9001"), PARAM_MIS_STATUS);
        Assert.assertEquals("参数缺失", PARAM_MIS_MSG);

        // 参数错误
        Assert.assertEquals(Integer.valueOf("9002"), PARAM_ERROR_STATUS);
        Assert.assertEquals("参数错误", PARAM_ERROR_MSG);

        // 权限不够
        Assert.assertEquals(Integer.valueOf("9003"), PRIV_EXCEED_STATUS);
        Assert.assertEquals("权限不够", PRIV_EXCEED_MSG);

        // 缺少项目名称
        Assert.assertEquals(Integer.valueOf("1001"), MIS_PROJECT_NAME_STATUS);
        Assert.assertEquals("缺少project名称", MIS_PROJECT_NAME_MSG);

        // 项目名称重名
        Assert.assertEquals(Integer.valueOf("1002"), DUP_PROJECT_NAME_STATUS);
        Assert.assertEquals("project名称重复", DUP_PROJECT_NAME_MSG);

        // 缺少产品线名称
        Assert.assertEquals(Integer.valueOf("1004"), MIS_PRODUCT_NAME_STATUS);
        Assert.assertEquals("缺少product名称", MIS_PRODUCT_NAME_MSG);

        Assert.assertEquals(Integer.valueOf("100107"), PRODUCT_NOT_EXISTS_STATUS);
        Assert.assertEquals("产品线不存在", PRODUCT_NOT_EXISTS_MSG);

        // 版本不存在
        Assert.assertEquals(Integer.valueOf("100123"), VERSION_SRC_NOT_EXISTS_STATUS);
        Assert.assertEquals("源版本不存在", VERSION_SRC_NOT_EXISTS_MSG);

        Assert.assertEquals(Integer.valueOf("100124"), VERSION_DEST_NOT_EXISTS_STATUS);
        Assert.assertEquals("目标版本不存在", VERSION_DEST_NOT_EXISTS_MSG);
    }
}
