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

import React from 'react';
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router';
import historyPsuhWithQuery from '@/utils/historyPushWithQuery';

interface IBreadcrumbLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface IPropsBreadcrumbRender {
  links: IBreadcrumbLink[];
  router?: any;
}

const BreadcrumbRender = (props: IPropsBreadcrumbRender) => {
  const { links, router } = props;
  return (
    <Breadcrumb>
      {links.map((item, index) => {
        const { onClick, href } = item;
        let callback = () => historyPsuhWithQuery(router, href);
        if (typeof onClick === 'function') callback = onClick;
        return (
          <Breadcrumb.Item key={index}>
            <a onClick={callback}>{item.label}</a>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default withRouter(BreadcrumbRender);