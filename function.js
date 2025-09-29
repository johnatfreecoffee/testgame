window.function = function (playerName) {
  const name = playerName.value || 'PLAYER';
  
  try {
    const gamePage = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Test</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
    <style>
        body { margin: 0; background: #000; color: #0f0; font-family: monospace; }
        canvas { display: block; margin: 20px auto; }
    </style>
</head>
<body>
    <h1 style="text-align:center; color:#0f0;">HELLO ${name}!</h1>
    <script>
        let x = 400, y = 300;
        
        function setup() {
            createCanvas(800, 600);
        }
        
        function draw() {
            background(0);
            fill(0, 255, 0);
            text('Player: ${name}', 10, 20);
            text('Use Arrow Keys', 10, 40);
            text('Score: 0', 10, 60);
            
            // Player
            if (keyIsDown(LEFT_ARROW)) x -= 3;
            if (keyIsDown(RIGHT_ARROW)) x += 3;
            if (keyIsDown(UP_ARROW)) y -= 3;
            if (keyIsDown(DOWN_ARROW)) y += 3;
            
            fill(0, 255, 255);
            rect(x, y, 30, 30);
        }
    </script>
</body>
</html>`;
    
    const encodedHtml = encodeURIComponent(gamePage);
    return "data:text/html;charset=utf-8," + encodedHtml;
    
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }
}
