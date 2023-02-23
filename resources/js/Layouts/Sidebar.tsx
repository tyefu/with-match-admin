import styled from 'styled-components';

const SidebarContainer = styled.div`
  box-sizing: border-box;
//   top: 64px;
  height: 100%;
  width: 220px;
  position: fixed;
  overflow: auto;
  background: #1A1A1A;
  padding: 20px;
`;

const SidebarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SidebarListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const SidebarLink = styled.a`
  display: block;
  
  padding: 10px;
  color: #fff;
  text-decoration: none;
  &:hover {
    background-color: #ccc;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarListItem>
          <SidebarLink href="#">ホーム</SidebarLink>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarLink href="#">メニュー2</SidebarLink>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarLink href="#">メニュー3</SidebarLink>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarLink href="#">メニュー8</SidebarLink>
        </SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;