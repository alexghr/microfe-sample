type TemplateOptions = {
  app: string;
  body: string;
  style: string;
}

export default function render({
  app,
  body,
  style
}: TemplateOptions) {
  return /* html */`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    ${style}
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="${app}"></script>
  </body>
</html>
`
}