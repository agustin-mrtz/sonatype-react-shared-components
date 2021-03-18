/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';
import CodeExample from '../CodeExample';

const pageConfigExample = `import Foo from './pages/Foo';
import Bar from './pages/Bar';
import Baz from './pages/Baz';
import NxCheckboxPage from './components/NxCheckboxPage';

const pageConfig: PageConfig = {
  'Styles - HTML Elements': {
    'foo component': Foo,
    'bar': Bar,
    'baz': Baz
  },
  'React Components': {
    'NxCheckbox': NxCheckboxPage
  }
};`;

const Contributing = () =>
  <>
    <GalleryTile title="How to add a new component to the Gallery" >
      <h3 className="nx-h3">Create a page describing the component</h3>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          For each component or style that you want to add to the Gallery, create a subdirectory
          underneath <code className="nx-code">src/components</code> or <code className="nx-code">src/styles</code>
          with the name of the component or style
        </li>
        <li className="nx-list__item">
          Under the subdirectory, create 2 Typescript files to describe the behavior of your component or style. One
          file will be <code className="nx-code">[ComponentName]Example.tsx</code>, which has a working example of the
          component with how different parameters are handled. The second file will
          be <code className="nx-code">[ComponentName]Page.tsx</code>, which should contain 3 things:
          <ul className="nx-list nx-list--bulleted">
            <li className="nx-list__item">
              A description of the component and its parameters, as well as an example of how to use the component.
              See also the <code className="nx-code">GalleryDescriptionTile</code> component
            </li>
            <li className="nx-list__item">
              Code that demonstrates the component (import the example component and invoke it)
            </li>
            <li className="nx-list__item">
              Code snippet of the example component (use the <code className="nx-code">CodeExample</code> component)
            </li>
          </ul>
        </li>
        <li className="nx-list__item">
          See also <code className="nx-code">NxCheckboxPage.tsx</code>
          and <code className="nx-code">NxCheckboxExample.tsx</code> as an example of how to create a
          component example.
        </li>
      </ul>
      <h3 className="nx-h3">Add the new page to Gallery navigation</h3>
      <p className="nx-p">
        After you've created the description page, in order to add the component to the Gallery Navigation, you
        will need to add it to the <code className="nx-code">pageConfig</code> object inside of
        the <code className="nx-code">pageConfig.ts</code> file
      </p>
      <CodeExample content={pageConfigExample}/>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          Import the description page you created earlier
        </li>
        <li className="nx-list__item">
          Place the entry in the proper category (creating a new category if necessary)
        </li>
        <li className="nx-list__item">
          It is important to note that the key that you use for your entry will be used by
          <code className="nx-code">react-router</code> to auto-populate the left-hand navigation, page title and URL
        </li>
      </ul>
    </GalleryTile>
  </>;

export default Contributing;
