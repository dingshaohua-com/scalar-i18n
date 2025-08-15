export default [
    {
        fields: [
            {
                oldStr: 'Open API Client',
                newStr: '打开客户端'
            }
        ],
        file: 'packages/api-client/src/components/OpenApiClientButton.vue'
    },
    {

        fields: [
            {
                oldStr: 'Send</span>',
                newStr: '发送</span>'
            }
        ],
        file: 'packages/api-client/src/components/AddressBar/AddressBar.vue'
    },
    {
        fields: [
            {
                oldStr: 'Required authentication',
                newStr: '必填身份验证'
            },
            {
                oldStr: 'Available authentication',
                newStr: '可选身份验证'
            },
            {
                oldStr: 'Add new authentication',
                newStr: '添加新的身份认证'
            }
        ],
        file: 'packages/api-client/src/views/Request/libs/auth.ts'
    },
    {
        file: 'packages/api-client/src/views/Request/RequestSection/RequestCodeExample.vue',
        fields: [
            {
                oldStr: 'Code Snippet',
                newStr: '请求模板'
            },
        ]
    },
    {
        file: 'packages/api-client/src/views/Request/RequestSection/RequestSection.vue',
        fields: [
            {
                oldStr: 'Authentication',
                newStr: '鉴权'
            },
            
             {
                oldStr: 'title="Headers"',
                newStr: 'title="请求头"'
            },
            {
                oldStr: 'Query Parameters',
                newStr: '请求行'
            },
            {
                oldStr: 'title="Body"',
                newStr: 'title="请求体"'
            }
        ]
    },
    {
        file: 'packages/api-client/src/views/Request/RequestSection/RequestAuth/RequestAuth.vue',
        fields: [
            {
                oldStr: `Auth Type
            </template>`,
                newStr: `权限类型
            </template>`
            },
        ]
    },
    {
        file: 'packages/api-client/src/views/Request/ResponseSection/RequestHeaders.vue',
        fields: [
            {
                oldStr: 'Request Headers',
                newStr: '请求头'
            },
        ]
    },
    {
        file: 'packages/api-client/src/views/Request/ResponseSection/ResponseBodyDownload.vue',
        fields: [
            {
                oldStr: 'Download</span>',
                newStr: '下载</span>'
            },
        ]
    },

    {
        file: 'packages/api-client/src/views/Request/ResponseSection/ResponseBodyToggle.vue',
        fields: [
            {
                oldStr: 'Preview',
                newStr: '预览'
            },
            {
                oldStr: 'Raw',
                newStr: '原始数据'
            },

        ]
    },
    {
        file: 'packages/api-client/src/views/Request/ResponseSection/ResponseEmpty.vue',
        fields: [
            {
                oldStr: 'Send Request',
                newStr: '发送请求'
            },

        ]
    },
    {
        file: 'packages/api-client/src/views/Request/ResponseSection/ResponseHeaders.vue',
        fields: [
            {
                oldStr: 'Response Headers',
                newStr: '响应头'
            },

        ]
    },
    {
        file: 'packages/api-client/src/views/Request/ResponseSection/ResponseSection.vue',
        fields: [
            {
                oldStr: `Response
          </span>`,
                newStr: `响应
          </span>`
            },
            {
                oldStr: 'title="Body"',
                newStr: 'title="响应体"'
            },
        ]
    },
    {
        file: 'packages/api-reference/src/components/ShowMoreButton.vue',
        fields: [
            {
                oldStr: 'Show More',
                newStr: '展开'
            },

        ]
    },
    {
        file: 'packages/api-reference/src/components/Content/ClientLibraries/ClientLibraries.vue',
        fields: [
            {
                oldStr: 'Client Libraries',
                newStr: '客户端'
            },

        ]
    },
    {
        file: 'packages/api-reference/src/components/Content/Introduction/Introduction.vue',
        fields: [
            {
                oldStr: 'Authentication',
                newStr: '鉴权'
            },

        ]
    },
    {
        file: 'packages/api-reference/src/components/Content/Models/ClassicLayout.vue',
        fields: [
            {
                oldStr: 'Models',
                newStr: '模型'
            },

        ]
    },
    {
        file: 'packages/api-reference/src/components/Content/Models/ModernLayout.vue',
        fields: [
            {
                oldStr: 'Models',
                newStr: '模型'
            },

        ]
    },
    {
        file: 'packages/api-reference/src/components/OperationsList/OperationsList.vue',
        fields: [
            {
                oldStr: "'Operations'",
                newStr: "'接口列表'"
            },

        ]
    },
    {
        file: 'packages/api-reference/src/features/base-url/BaseUrl.vue',
        fields: [
            {
                oldStr: `Server
  </label>`,
                newStr: `服务
  </label>`,
            },

        ]
    },
    {
        file: 'packages/api-reference/src/features/download-link/DownloadLink.vue',
        fields: [
            {
                oldStr: 'Download OpenAPI Document',
                newStr: '下载 OpenAPI 文档',
            }
        ]
    },
    {
        file: 'packages/api-reference/src/features/Operation/components/OperationParameters.vue',
        fields: [
            {
                oldStr: 'Path Parameters',
                newStr: '路径参数',
            },
            {
                oldStr: 'Query Parameters',
                newStr: '请求行',
            },
            {
                oldStr: 'Headers</template>',
                newStr: '请求头</template>',
            },
            {
                oldStr: 'Body</template>',
                newStr: '请求体</template>',
            }
        ]
    },

    {
        file: 'packages/api-reference/src/features/Operation/components/OperationResponses.vue',
        fields: [
            {
                oldStr: 'Responses</template>',
                newStr: '响应</template>',
            }
        ]
    },
    {
        file: 'packages/api-reference/src/features/Search/components/SearchButton.vue',
        fields: [
            {
                oldStr: `Search
    </span>`,
                newStr: `搜索
    </span>`,
            }
        ]
    },
    {
        file: 'packages/api-reference/src/features/Search/components/SearchModal.vue',
        fields: [
            {
                oldStr: '↑↓ Navigate',
                newStr: '↑↓ 导航',
            },
            {
                oldStr: '⏎ Select',
                newStr: '⏎ 选择',
            }
        ]
    },

    {
        type: 'insert',
        line: 23,
        file: 'packages/api-reference/src/features/sidebar/components/Sidebar.vue',
        content: `const zhDic:any = {
  "Introduction":'简介',
  "Models":'模型',
}
watch(
  () => items.value.entries,
  () => {
    items.value.entries.forEach(item=>{
      item.title = zhDic[item.title] ?? item.title
    })
  },
)`
    },
    {
        file: 'packages/api-reference/src/features/test-request-button/TestRequestButton.vue',
        fields: [
            {
                oldStr: 'Test Request</span>',
                newStr: '测试</span>',
            }
        ]
    },
    {
        file: 'packages/components/src/components/ScalarSearchInput/ScalarSearchInput.vue',
        fields: [
            {
                oldStr: 'Search...',
                newStr: '搜索...',
            }
        ]
    },
    {
        file: 'packages/components/src/components/ScalarSidebar/ScalarSidebarFooter.vue',
        fields: [
            {
                oldStr: 'Powered by Scalar',
                newStr: '技术支持: Scalar',
            }
        ]
    },

  {
        file: 'packages/components/src/components/ScalarSidebar/ScalarSidebarSearchInput.vue',
        fields: [
            {
                oldStr: 'Search...',
                newStr: '搜索...',
            }
        ]
    },

]
