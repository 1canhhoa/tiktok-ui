// import node module
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// import file
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function Menu({ children, items = [], icon }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            // visible
            interactive
            placement="bottom-start"
            delay={[0, 1000]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <div className={cx('renderitem')}>{renderItems()}</div>
                        <span className={cx('toggle')}>{icon}</span>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
