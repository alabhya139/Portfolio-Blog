import React from 'react';
import './index.scss'
import IconButton from '../../IconButton';

import WRITE_ICON from '../../../../assets/images/ic_write.png';
import history from '../../../router/history';

const Header = (props) => {
    const { routeName, pageIcon } = props;
    const writeBlog = () =>{
        history.push('/blogs/edit')
    }
    return (
        <div className="right-container-header">
            <div className="left-section">
                <IconButton
                    iconSrc={pageIcon}
                    width={28}
                    value={routeName}
                    fontSize={16}
                    fontWeight={600}
                />
            </div>
            <div className="right-section">
                {
                    routeName === 'BLOGS' &&
                    <IconButton
                        onClickHandler={writeBlog}
                        iconSrc={WRITE_ICON}
                        width={28}
                        value={'Write Blog'}
                        animated={true}
                        fontSize={14}
                    />
                }
            </div>
        </div>
    )
}

export default Header;
