/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.dtstack.engine.domain;


import com.baomidou.mybatisplus.annotation.TableName;

/**
 * company: www.dtstack.com
 * author: toutian
 * create: 2019/10/22
 */
@TableName("schedule_job_job")
public class ScheduleJobJob extends BaseEntity {

    private String jobKey;

    private String parentJobKey;

    private Integer parentAppType;


    public String getJobKey() {
        return jobKey;
    }

    public void setJobKey(String jobKey) {
        this.jobKey = jobKey;
    }

    public String getParentJobKey() {
        return parentJobKey;
    }

    public void setParentJobKey(String parentJobKey) {
        this.parentJobKey = parentJobKey;
    }

    public Integer getParentAppType() {
        return parentAppType;
    }

    public void setParentAppType(Integer parentAppType) {
        this.parentAppType = parentAppType;
    }
}