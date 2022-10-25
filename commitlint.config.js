module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
      type: {
        description: '选择你要提交的类型：',
        enum: {
          feat: {
            description: '新增功能',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '修复bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '文档变更',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: '代码格式（不影响功能，例如空格、分号等格式修正）',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '代码重构（不包括 bug 修复、功能新增）',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '性能优化',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '添加、修改测试用例',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: '构建流程、外部依赖变更（如升级npm包、修改脚手架配置等）',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: '修改 CI 配置、脚本',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: '对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '回滚 commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '请输入更改范围(例如:component或hook)',
      },
      subject: {
        description: '请填写简短精炼的变更描述',
      },
      body: {
        description: '请填写更加详细的变更描述',
      },
      isBreaking: {
        description: '是否做了非兼容性改变？',
      },
      breakingBody: {
        description: '请输入对提交本身更长的描述',
      },
      breaking: {
        description: '描述非兼容性的变化',
      },
      isIssueAffected: {
        description: '此更改是否会影响任何未决的问题？',
      },
      issuesBody: {
        description: '如果问题已经解决，请输入对提交本身更长的描述',
      },
      issues: {
        description: '添加问题参考(例如:“fix #123”，“re #123”)',
      },
    },
  },
}
