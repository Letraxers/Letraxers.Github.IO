const consoleDiv = document.getElementById('console');
const inputField = document.getElementById('input');
let commandHistory = [];
let historyIndex = -1;

const availableColors = [
    'White', 'Black', 'Red', 'Green', 'Blue', 'Pink', 'Orange',
    'Yellow', 'Purple', 'Cyan', 'Magenta', 'Brown', 'Gray',
    'Gold', 'Silver', 'Lavender', 'Peach', 'Teal', 'Navy',
    'Maroon', 'Olive', 'Lime', 'Coral', 'Turquoise', 'Indigo',
    'Crimson', 'Salmon', 'Sienna', 'Violet', 'Mint', 'Tan',
    'Aqua', 'Fuchsia', 'Plum', 'Ivory', 'Khaki', 'Slate',
    'Charcoal', 'Burgundy', 'Periwinkle', 'Wheat', 'Beige',
    'Copper', 'Emerald', 'Ruby', 'Onyx', 'Topaz', 'Amethyst',
    'Cerulean', 'Lilac', 'Mahogany', 'Jade', 'Amber', 'Jet',
    'Seafoam', 'Mauve', 'Rose', 'Sand', 'Cinnamon', 'Chestnut',
    'Walnut', 'Almond', 'LavenderBlush', 'LightSteelBlue',
    'Honeydew', 'LemonChiffon', 'MistyRose', 'OldLace',
    'Peony', 'Thistle', 'LightSalmon', 'MediumVioletRed',
    'SpringGreen', 'PowderBlue', 'LightCoral', 'PaleGoldenrod',
    'LightCyan', 'MediumTurquoise', 'DarkKhaki', 'LawnGreen',
    'Firebrick', 'Orchid', 'DarkOliveGreen', 'LightSeaGreen',
    'MediumSeaGreen', 'MediumOrchid', 'LightSlateGray',
    'DarkSlateGray', 'DarkTurquoise', 'DarkViolet',
    'DarkMagenta', 'DeepPink', 'LightPink', 'AliceBlue',
    'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige',
    'Bisque', 'BlanchedAlmond', 'BlueViolet', 'Burlywood',
    'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral',
    'CornflowerBlue', 'Cornsilk', 'Crimson', 'DarkBlue',
    'DarkCyan', 'DarkGoldenrod', 'DarkGray', 'DarkGreen',
    'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange',
    'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen',
    'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise',
    'DarkViolet', 'DeepSkyBlue', 'DimGray', 'DodgerBlue',
    'Firebrick', 'FloralWhite', 'ForestGreen', 'Fuchsia',
    'Gainsboro', 'GhostWhite', 'Gold', 'Goldenrod', 'Gray',
    'GreenYellow', 'Honeydew', 'HotPink', 'IndianRed', 'Indigo',
    'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen',
    'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenrodYellow',
    'LightGray', 'LightGreen', 'LightPink', 'LightSalmon',
    'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray',
    'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen',
    'Linen', 'Magenta', 'Maroon', 'MediumAquamarine', 'MediumBlue',
    'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue',
    'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed',
    'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin',
    'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab',
    'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenrod', 'PaleGreen',
    'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff',
    'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red',
    'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown',
    'SeaGreen', 'Seashell', 'Sienna', 'Silver', 'SkyBlue',
    'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue',
    'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet',
    'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'
];

function logToConsole(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    consoleDiv.appendChild(messageElement);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function changeTextColor(color) {
    consoleDiv.style.color = color;
}

function changeBackgroundColor(color) {
    consoleDiv.style.backgroundColor = color;
}

function resetColors() {
    consoleDiv.style.color = '';
    consoleDiv.style.backgroundColor = '';
}

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = inputField.value.trim();
        commandHistory.push(command);
        historyIndex = commandHistory.length;

        logToConsole('> ' + command);

        if (command.startsWith('Spam')) {
            const wordsMatch = command.match(/-W\s+(.+?)(?=\s*-T|\s*$)/);
            const timeMatches = command.match(/-T\s+(\d+)/g);

            if (wordsMatch) {
                const words = wordsMatch[1].trim();
                let count = 1;
                let delay = 0;

                if (timeMatches) {
                    count = parseInt(timeMatches[0].split(' ')[1]);
                    delay = parseInt(timeMatches[1]?.split(' ')[1] || 0);
                }

                for (let i = 0; i < count; i++) {
                    setTimeout(() => {
                        logToConsole(words);
                    }, delay * i * 1000);
                }
            }
        } else if (command.startsWith('Color -T')) {
            const color = command.split(' ')[2];
            if (availableColors.includes(color)) {
                changeTextColor(color.toLowerCase());
            } else if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
                changeTextColor(color);
            }
        } else if (command.startsWith('Color -B')) {
            const color = command.split(' ')[2];
            if (availableColors.includes(color)) {
                changeBackgroundColor(color.toLowerCase());
            } else if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
                changeBackgroundColor(color);
            }
        } else if (command.toLowerCase() === 'color reset') {
            resetColors();
        } else if (command.toLowerCase() === 'color list') {
            availableColors.forEach((color, index) => {
                logToConsole(`${index + 1}. ${color}`);
            });
        } else if (command.toLowerCase() === 'clear') {
            consoleDiv.innerHTML = '';
        }

        inputField.value = '';
    }
});

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            inputField.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            inputField.value = commandHistory[historyIndex];
        } else {
            inputField.value = '';
        }
    }
});
