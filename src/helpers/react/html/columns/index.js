
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import makeUniqueKeyStr from '../../../utils/string/makeUniqueKeyStr';

import makeColumnContent from './content';

const makeColumnLayout = ({ columns = [], styles }) => {
    // iterate over array of objects, generate bootstrap compatible markup
    const columnLayout = columns?.map((col) => {
        const { columnHeader, columnItems } = col;

        const columnContent = makeColumnContent({ content: columnItems, styles });
        const colKey = makeUniqueKeyStr(`${col.colId}_${columnHeader}`);
        // TODO: correct h5 classname structure
        const headingStyle = "border-b inline-block border-transparent text-md text-secondary dark:text-secondary-dark my-2 font-bold hover:border-gray-10";
        return (
            <Col key={colKey}>
                <div>
                    <h5
                        className={headingStyle}>
                        {columnHeader}
                    </h5>
                    {columnContent}
                </div>
            </Col>
        );
    });

    return columnLayout.length
        ? <Row>{columnLayout}</Row>
        : null;
};

export default makeColumnLayout;