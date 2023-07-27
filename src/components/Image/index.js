import { useState, forwardRef } from 'react';
import image from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
function Image(
    { src, alt, className, fallback: customFallback = image.noImage, ...props },
    ref,
) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            className={classNames(styles.wrapper, className)}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
