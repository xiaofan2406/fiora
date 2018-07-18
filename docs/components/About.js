/* @flow */
import React from 'react';
import { css } from 'react-emotion';
import { verticalScroll, spacing, fontSizes } from 'styles';

const cssAbout = css`
  & > .title {
    font-size: ${fontSizes.large}px;
    font-weight: bold;
    margin-bottom: ${spacing.external}px;
  }
  & > article {
    height: 640px;
    ${verticalScroll};
  }
`;

const About = () => (
  <div className={cssAbout}>
    <div className="title">About</div>
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan
        consequat massa tempor condimentum. Integer id finibus erat. Aenean
        sagittis justo eget mi tempor vestibulum. Donec nec eros convallis,
        scelerisque dui eu, congue sapien. Donec id tortor sit amet elit gravida
        semper ut sed ipsum. Pellentesque elit massa, commodo eget quam sit
        amet, malesuada rhoncus elit. Aliquam at malesuada turpis, ac finibus
        est. Maecenas vulputate ut risus at imperdiet.
      </p>
      <p>
        Sed lacinia tincidunt nibh, sit amet volutpat felis sagittis a. Fusce
        dictum in tortor vitae vestibulum. Suspendisse maximus justo vitae
        mollis vulputate. Nulla sit amet ultrices urna, quis lobortis leo.
        Maecenas viverra mi sed quam ultrices, quis vulputate diam luctus.
        Integer aliquet sem lorem, nec rutrum mi dictum vel. Sed mauris eros,
        eleifend in dignissim a, suscipit quis nisl. Quisque molestie orci
        libero, vitae consequat elit ultricies non. Donec dictum nisi ut nulla
        scelerisque, eu venenatis quam pharetra. Integer vehicula hendrerit ex
        vel consequat. Aliquam libero sapien, pharetra id hendrerit sed, porta
        quis lectus. Donec tempor dolor nec nulla congue, quis facilisis mauris
        cursus. Phasellus vehicula orci auctor sapien volutpat imperdiet. Sed
        nec efficitur augue.
      </p>
      <p>
        Ut nisi justo, aliquet id feugiat vel, feugiat ut diam. Proin tempus
        vitae ipsum eget sagittis. Donec ut nunc nisl. Nunc a enim interdum,
        tincidunt massa quis, fermentum massa. Donec tincidunt diam id turpis
        porta, vel ultrices quam mattis. Curabitur quis lorem ultricies,
        hendrerit justo id, hendrerit felis. Nulla nec feugiat mi. Ut neque
        urna, blandit vel metus et, rutrum semper ex. Nullam dui lectus,
        faucibus vitae interdum vel, eleifend id ipsum. Quisque bibendum ornare
        tortor, at pretium risus aliquet at. Morbi nisl erat, feugiat a
        scelerisque sed, commodo ut ante. Nullam orci velit, varius ac
        vestibulum quis, aliquet vitae mauris. Integer ac nibh vel ex blandit
        consequat. Pellentesque egestas ornare quam id feugiat. Curabitur
        ultrices urna sit amet arcu dignissim, a sodales ante bibendum.
      </p>
      <p>
        Nam molestie fringilla fermentum. Nunc placerat libero nulla, eu auctor
        ipsum auctor id. Proin varius ipsum sed erat placerat viverra. Nunc
        vitae feugiat enim. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Donec interdum, nisi a ultrices
        fringilla, nibh sapien pulvinar erat, hendrerit interdum mi sem
        pellentesque lorem. Sed eleifend euismod arcu interdum pharetra. Nunc
        nibh eros, ornare ac placerat ut, ullamcorper in diam.
      </p>
      <p>
        Fusce rutrum commodo diam ac bibendum. Pellentesque laoreet massa nibh,
        auctor aliquam nunc posuere non. Quisque placerat, risus gravida mollis
        rutrum, leo elit ullamcorper sem, sit amet ullamcorper tortor justo nec
        est. Donec vulputate leo a purus congue sagittis. Nulla et eros ut dolor
        luctus hendrerit eget eget libero. Suspendisse cursus neque non ex
        rutrum convallis. Curabitur aliquam hendrerit lectus id faucibus. Mauris
        luctus metus eu tempor elementum. Vivamus rhoncus, arcu et pretium
        auctor, ante sapien maximus dui, sit amet tempus dolor mauris varius
        nulla. Aenean turpis elit, pharetra nec nunc ac, eleifend placerat orci.
        Praesent maximus tincidunt dolor. Donec diam neque, lobortis mollis dui
        id, auctor consectetur nulla. Maecenas tortor dolor, porta ornare dolor
        eleifend, facilisis sagittis ante. Aenean sit amet orci vitae urna
        sodales iaculis.
      </p>
      <p>
        Phasellus sed rhoncus nulla. Sed ultricies enim id risus viverra mollis.
        Sed pharetra risus ipsum, id lobortis mauris faucibus viverra. Praesent
        quis convallis lectus. Donec quis tempus neque. Cras auctor ipsum sit
        amet sodales malesuada. Etiam porta ante in diam tempor, vel lacinia mi
        malesuada. Suspendisse turpis ligula, placerat eu neque a, cursus
        convallis nisi. Nunc feugiat eros at mauris hendrerit sollicitudin.
        Mauris risus eros, semper sed luctus feugiat, efficitur in tellus. Sed
        fermentum lobortis odio id semper. Ut mattis maximus diam sed viverra.
        Donec tristique ultrices lectus accumsan feugiat. Morbi ultrices
        pellentesque neque eget luctus. Vivamus venenatis non purus eget
        placerat.
      </p>
      <p>
        Aliquam erat volutpat. Nullam turpis eros, consectetur non aliquam quis,
        scelerisque id sapien. Integer sagittis consequat urna eget tristique.
        Maecenas volutpat posuere lectus. Duis et ipsum ac purus placerat
        lobortis bibendum nec sem. Sed interdum sollicitudin ultrices. Sed vel
        tempor ipsum. Ut dictum sem ac dolor lacinia, ac luctus nunc suscipit.
        Sed eleifend velit nec semper vestibulum. Quisque feugiat volutpat felis
        sodales egestas. In quis ullamcorper justo. Phasellus sodales quam
        risus, id luctus odio laoreet in. Duis a eros sed leo lacinia elementum
        vitae id est. Praesent interdum quam sit amet sapien elementum
        convallis. Quisque sit amet enim quam.
      </p>
      <p>
        Proin et mauris lacinia, tristique eros eu, viverra purus. Mauris ac
        justo hendrerit, sodales arcu a, euismod lectus. Nunc posuere tristique
        metus. Duis in neque erat. Donec non finibus ante, id eleifend magna.
        Donec eu massa massa. Nulla ornare libero vel mi fringilla lobortis eu
        nec purus. Vivamus facilisis cursus tincidunt. Sed blandit nulla at
        magna sagittis dapibus. Fusce a feugiat lectus. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Aliquam imperdiet at lectus non vestibulum. Fusce viverra bibendum
        libero ullamcorper pellentesque. Sed rhoncus, enim non tincidunt
        condimentum, augue sem hendrerit arcu, ac accumsan elit nisl vitae erat.
        Maecenas id mauris at tellus volutpat consectetur.
      </p>
      <p>
        Morbi pellentesque rutrum tristique. Nullam at massa nunc. Phasellus ut
        tristique enim. Etiam pellentesque finibus malesuada. Maecenas luctus
        justo magna, a imperdiet ligula vehicula sit amet. Ut rhoncus sagittis
        dolor, ac suscipit sapien finibus in. Sed vehicula ipsum at dolor
        placerat mattis eget tempus nisl.
      </p>
      <p>
        Mauris iaculis justo a metus tempor maximus. Aenean tincidunt varius
        sodales. Donec placerat, velit non sagittis luctus, sem ligula ultrices
        risus, nec pharetra nunc eros sed tellus. Nullam vitae mauris imperdiet,
        luctus risus at, interdum nibh. Integer scelerisque ipsum eleifend,
        dignissim justo a, pharetra quam. Maecenas id elementum nunc. Nunc
        fringilla ultricies dui. Nunc non orci sit amet metus rutrum sodales et
        ut diam. Nam pretium enim a orci ultricies, id tristique libero aliquet.
      </p>
    </article>
  </div>
);

export default About;
