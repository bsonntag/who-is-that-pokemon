import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

const gradientAngle = 115.12312781;
const style = `
  html {
    --gradient-angle: ${gradientAngle}deg;
    --cos-angle: ${Math.cos(toRadians(gradientAngle - 90))};
    --tan-angle: ${Math.tan(toRadians(gradientAngle - 90))};
  }
`;

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style type='text/css'>{style}</style>
        </>
      ),
    };
  }
}

/*
  249
  531
*/
