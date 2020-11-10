import React from 'react';

function Section ({title, children}) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

Section.defaultProps = {
    title: '',
};

export default Section;