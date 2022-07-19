export default function Services() {
    return (
        <div>
            <main>
                <h1 className="title">
                    Services
                </h1>

                <p className="description">
                    This is Services This is Services This is Services This is Services<br />
                    This is Services This is Services.
                </p>
            </main>

            <style jsx>{`
            main {
                padding: 5rem 0;
                margin-bottom: 6.25rem;
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            .title {
                margin-top: 5.5rem;
                margin-left: 5.0rem;
                margin-bottom: 0rem;
                line-height: 1.15;
                font-size: 4rem;
              }
      
              .title,
              .description {
                text-align: left;
              }
      
              .description {
                margin-top: 0.5rem;
                margin-left: 5.0rem;
                line-height: 1.5;
                font-size: 1.25rem;
              }
            `}</style>
        </div>
    )
}