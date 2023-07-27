// import node module
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// import file
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultfn = () => {};
function Menu({ children, items = [], icon, onChange = defaultfn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            // visible
            interactive
            placement="bottom-start"
            delay={[0, 500]}
            offset={[10, 4]} //dich sang [trai,phai]
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
