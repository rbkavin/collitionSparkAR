const s = require("Scene");
const p = require("Patches");
const r = require('Reactive');

s.root.find("2dText0").text = p.getScalarValue("score").toString();


p.setPoint2DValue("ob1", r.point2d(s.root.find('plane0').transform.x, s.root.find('plane0').transform.y));
p.setPoint2DValue("ob2", r.point2d(s.root.find('plane1').transform.x, s.root.find('plane1').transform.y));


p.setPoint2DValue("r1", r.point2d(s.root.find('rectangle0').transform.x, s.root.find('rectangle0').transform.y));
p.setPoint2DValue("r2", r.point2d(s.root.find('rectangle1').transform.x, s.root.find('rectangle1').transform.y));
