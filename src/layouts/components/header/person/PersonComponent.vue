<script lang="tsx">
  import { UserOutlined } from '@ant-design/icons-vue'
  import { Avatar, Button, Dropdown, Menu, MenuItem } from 'ant-design-vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      /**
       * @element
       * @description 个人头像
       */
      const UserAvatar = () => <Avatar size={44} v-slots={{ icon: () => <UserOutlined /> }} />
      /**
       * @element
       * @description 卡片内容
       */
      const CardContainer = () => (
        <Menu>
          <MenuItem>
            <Button type={'link'}>个人中心</Button>
          </MenuItem>
          <MenuItem>
            <Button type={'link'}>退出登录</Button>
          </MenuItem>
        </Menu>
      )
      return () => (
        <Dropdown v-slots={{ overlay: CardContainer() }} placement={'bottom'}>
          {UserAvatar()}
        </Dropdown>
      )
    },
  })
</script>
