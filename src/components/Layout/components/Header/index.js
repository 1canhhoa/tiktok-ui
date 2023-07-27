// import node module
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
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
    faPaperPlane,
    faBell,
    faUser,
    faBookmark,
    faLitecoinSign,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
// import file
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/images';
import Styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu/index';
import { IconInbox, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        iconRight: <FontAwesomeIcon icon={faToggleOn} />,
    },
];

const USER_LOGIN = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faLitecoinSign} />,
        title: 'Get Coins',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        title: 'Logout',
        separate: true,
    },
];
const cx = classNames.bind(Styles);
const currentUser = true;
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const handleManuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <TippyHeadless
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

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>
                {/* chung action */}
                <div className={cx('action')}>
                    {currentUser ? (
                        // login
                        <>
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
                            <Tippy
                                // trigger="click"
                                content="Messages"
                                placement="bottom"
                                className={cx('tippy')}
                            >
                                <button className={cx('faPaperPlane')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                // trigger="click"
                                content="Inbox"
                                placement="bottom"
                                className={cx('tippy')}
                            >
                                <button className={cx('faBell')}>
                                    {/* <FontAwesomeIcon icon={faBell} /> */}
                                    <IconInbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // logup
                        <>
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
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {/* chung menu */}
                    <Menu
                        items={currentUser ? USER_LOGIN : MENU_ITEMS}
                        onChange={handleManuChange}
                    >
                        {currentUser ? (
                            // login
                            <Image
                                alt="nguyenvana"
                                className={cx('avatar')}
                                src="https://vtv1.mediacdn.vn/zoom/640_400/2022/12/19/221218184732-messi-wc-trophy-16714338650611943125261-crop-1672061255342223645900.jp"
                                fallback={image.fallbackLogo}
                            />
                        ) : (
                            // logup

                            <button className={cx('threedots')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
