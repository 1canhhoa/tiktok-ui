// import node module
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faToggleOn,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
// import file
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/images';
import Styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu/index';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        tilte: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        tilte: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        tilte: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        tilte: 'Dark mode',
    },
];

const cx = classNames.bind(Styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <h4 className={cx('text-result')}>
                                    View all reasults for " "
                                </h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <Tippy content="tìm kiếm" placement="right">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                {/* action */}
                <div className={cx('action')}>
                    <Button
                        outlineBlack
                        leftIcon={
                            <FontAwesomeIcon
                                className={cx('faplus')}
                                icon={faPlus}
                            />
                        }
                    >
                        Up load
                    </Button>
                    <Button
                        className={cx('custom-getapp')}
                        outlineBlack
                        leftIcon={
                            <FontAwesomeIcon
                                className={cx('faplus')}
                                icon={faPlus}
                            />
                        }
                    >
                        get App
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu
                        items={MENU_ITEMS}
                        icon={<FontAwesomeIcon icon={faToggleOn} />}
                    >
                        {/* hover vào cái nút này sẽ hiện ra Menu */}
                        <button className={cx('threedots')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
