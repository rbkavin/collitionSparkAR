const s = require("Scene");
const p = require("Patches");
const r = require('Reactive');

Promise.all([
  s.root.findFirst("2dText0"),
  s.root.findFirst('plane0'),
  s.root.findFirst('plane1'),
  s.root.findFirst('rectangle0'),
  s.root.findFirst('rectangle1')
  ]).then(result=>{
let text1 = result[0];
  let p0=result[1];
  let p1 = result[2];
   let r0=result[3];
  let r1 = result[4];
  p.outputs.getScalar("score").then(r=>{
  r.monitor().subscribe(r=>{
    text1.text = r.newValue.toString();
  });
 });

p.inputs.setPoint2D("ob1", r.point2d(p0.transform.x, p0.transform.y));
p.inputs.setPoint2D("ob2", r.point2d(p1.transform.x, p1.transform.y));


p.inputs.setPoint2D("r1", r.point2d(r0.transform.x,r0.transform.y));
p.inputs.setPoint2D("r2", r.point2d(r1.transform.x, r1.transform.y));
});

