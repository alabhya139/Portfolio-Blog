import React from 'react';
import './index.scss';

import APPLAUSE from '../../../../assets/images/ic_applause.png';
import SHARE from '../../../../assets/images/ic_share.png';
import COMMENT from '../../../../assets/images/ic_comment.png';
import BLOG_FEED from '../../../../assets/images/ic_blog_feed.png';
import CALENDAR from '../../../../assets/images/ic_calendar.png';
import LIKE from '../../../../assets/images/ic_like.png';
import INNOVATIVE from '../../../../assets/images/ic_innovation.png';
import VIEW_COUNT from '../../../../assets/images/ic_view_count.png';
import IconButton from '../../IconButton';

const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien neque, cursus quis quam eget, congue eleifend ex. Ut ullamcorper, orci quis auctor semper, tellus ipsum ultrices ipsum, eget hendrerit nulla arcu et ligula. Fusce ut vehicula ligula, ut viverra lacus. Sed lectus risus, sodales eu felis at, porta viverra ipsum. Pellentesque hendrerit suscipit mauris, blandit efficitur lorem. Nulla at fermentum risus, eu dictum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc gravida, ligula tempus semper maximus, turpis nisl suscipit mi, ac dictum neque arcu et metus. In imperdiet auctor congue. Vivamus eget gravida purus. In accumsan justo nec hendrerit volutpat.

Maecenas varius varius mauris at bibendum. Maecenas ac malesuada turpis, vel luctus purus. Morbi nec mauris justo. Praesent a nunc tincidunt, volutpat lorem eget, hendrerit odio. Cras feugiat iaculis ultrices. Praesent vel varius arcu. Vestibulum tristique neque ullamcorper dolor eleifend, a hendrerit metus sollicitudin. Nulla at augue mi. Sed fringilla vulputate lacus, molestie malesuada ex vestibulum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Proin mollis vel tellus vel finibus. Maecenas tortor neque, tincidunt a purus vitae, aliquam efficitur nibh. Nulla justo odio, volutpat non erat sed, lacinia pretium velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non felis vitae purus accumsan pharetra. Nunc ut magna quis massa laoreet bibendum. Ut facilisis orci sollicitudin maximus sodales. Proin ut vulputate justo. Suspendisse pulvinar elit vehicula feugiat condimentum. In nulla justo, tristique ut auctor et, laoreet id felis. Mauris vitae nisl non erat cursus varius. Duis sodales massa nec nisl gravida, nec malesuada ipsum consectetur.

Sed id quam tempor nisi bibendum egestas eu eu metus. Donec tincidunt erat vitae finibus pharetra. Nullam vitae iaculis ligula, a tempor nisl. Phasellus sed viverra ipsum, et dignissim arcu. Phasellus rhoncus laoreet dui, eu dictum dolor accumsan a. Praesent suscipit luctus gravida. Ut consequat, nisi et cursus convallis, arcu velit viverra mauris, at molestie orci lectus nec erat. Praesent iaculis purus sit amet urna sollicitudin ultricies. Vestibulum eget convallis purus. Nunc sollicitudin a est vel convallis. Nunc nec pellentesque urna. Fusce lobortis, lectus nec placerat pulvinar, sem leo fringilla purus, vestibulum finibus est ipsum ut neque. Donec elementum laoreet mi eu sollicitudin. Phasellus id quam ante.

Curabitur ultricies nisl diam. Nam in neque in lacus rhoncus gravida vitae a lacus. Nullam ut mi iaculis, pharetra dui ut, eleifend dui. Fusce nec ipsum ullamcorper, tristique sem eget, consequat ante. Phasellus luctus arcu ut placerat malesuada. Donec vitae rutrum neque, sit amet viverra sapien. Pellentesque a dictum dolor, vitae ultricies nulla. Morbi et nunc maximus nunc rhoncus laoreet sit amet sed tortor. Curabitur imperdiet, lectus et tempor gravida, massa odio faucibus velit, sit amet lobortis felis arcu id mauris. Phasellus feugiat accumsan volutpat. Etiam faucibus varius ipsum, interdum ornare nisi cursus vel.

Praesent bibendum mi et rutrum porttitor. Fusce gravida ante quis urna fermentum, ut pretium massa mollis. Fusce tincidunt at elit eu iaculis. Sed imperdiet sem sit amet turpis lacinia posuere. Ut in fringilla eros. Cras finibus euismod pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam condimentum non ex eu ultricies. Curabitur et turpis justo. In lectus dolor, interdum eu fringilla at, luctus eget velit.`

const BlogContainer = (props) => {
    return (
        <div className="blog-card-container">
            <div className="blog-card-header">
                <div className="left-section">
                    <div className="blog-header-icon">
                        <img src={BLOG_FEED}></img>
                    </div>
                    <div className="blog-title">
                        Some Random Blog Title Just For Preview
                    </div>
                </div>
                <div className="right-section">
                    <IconButton
                        iconSrc={SHARE}
                        width={24}
                        animated={true}
                        value={''}
                    />
                </div>
            </div>
            <div className="blog-card-body">
                {body}
            </div>
            <div className="blog-card-footer">
                <div className="left-section">
                    <IconButton
                        iconSrc={APPLAUSE}
                        value={21}
                        animated={true}
                    />
                    <IconButton
                        iconSrc={LIKE}
                        value={48}
                        animated={true}
                        width={24}
                    />
                    <IconButton
                        iconSrc={INNOVATIVE}
                        value={32}
                        animated={true}
                    />
                    <IconButton
                        iconSrc={VIEW_COUNT}
                        value={231}
                        animated={true}
                        width={22}
                    />
                    <IconButton
                        iconSrc={COMMENT}
                        value={2}
                        animated={true}
                        width={18}
                    />
                </div>
                <div className="right-section">
                    <IconButton
                        iconSrc={CALENDAR}
                        value={`24 Aug, 2020, 09:15 PM`}
                    />
                </div>
            </div>
        </div >
    )
}

export default BlogContainer;
