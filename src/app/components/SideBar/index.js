import React, { useState } from 'react'
import ListItem from './ListItem';
import './index.scss';

import { SIDEBAR_ITEM } from './sideBarConfig';
import { InfoContainer } from '../InfoContainer';

import history from '../../router/history';

const SideBar = () => {
    let [sidebarItem, setSidebarItem] = useState(SIDEBAR_ITEM);

    const handleOnClick = (index) => {
        let sidebarItemCopy = [...sidebarItem];
        sidebarItemCopy.forEach((item, itemIndex) => {
            if(index === itemIndex){
                item.active = true;
            }else item.active = false;
        });
        setSidebarItem(sidebarItemCopy);
        history.push(sidebarItemCopy[index].routeName);
    }

    return (
        <div className="sidebar-wrapper">
            <InfoContainer></InfoContainer>
            <div className="menu-container">
                {
                    sidebarItem.map((item, index) => (
                        <ListItem
                            active={window.location.pathname.includes(item.routeName)}
                            key={index}
                            index={index}
                            title={item.title}
                            icon={item.icon}
                            iconSrc={item.iconSrc}
                            handleOnClick={handleOnClick}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SideBar;
