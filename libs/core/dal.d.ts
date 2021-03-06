// Auto-generated. Do not edit.
declare const enum DAL {
    // built/dockermake/pxtapp/ev3const.h
    NUM_INPUTS = 4,
    NUM_OUTPUTS = 4,
    LCD_WIDTH = 178,
    LCD_HEIGHT = 128,
    NUM_BUTTONS = 6,
    DEVICE_TYPE_NXT_TOUCH = 1,
    DEVICE_TYPE_NXT_LIGHT = 2,
    DEVICE_TYPE_NXT_SOUND = 3,
    DEVICE_TYPE_NXT_COLOR = 4,
    DEVICE_TYPE_TACHO = 7,
    DEVICE_TYPE_MINITACHO = 8,
    DEVICE_TYPE_NEWTACHO = 9,
    DEVICE_TYPE_TOUCH = 16,
    DEVICE_TYPE_COLOR = 29,
    DEVICE_TYPE_ULTRASONIC = 30,
    DEVICE_TYPE_GYRO = 32,
    DEVICE_TYPE_IR = 33,
    DEVICE_TYPE_THIRD_PARTY_START = 50,
    DEVICE_TYPE_THIRD_PARTY_END = 99,
    DEVICE_TYPE_IIC_UNKNOWN = 100,
    DEVICE_TYPE_NXT_TEST = 101,
    DEVICE_TYPE_NXT_IIC = 123,
    DEVICE_TYPE_TERMINAL = 124,
    DEVICE_TYPE_UNKNOWN = 125,
    DEVICE_TYPE_NONE = 126,
    DEVICE_TYPE_ERROR = 127,
    MAX_DEVICE_DATALENGTH = 32,
    MAX_DEVICE_MODES = 8,
    UART_BUFFER_SIZE = 64,
    TYPE_NAME_LENGTH = 11,
    SYMBOL_LENGTH = 4,
    DEVICE_LOGBUF_SIZE = 300,
    IIC_NAME_LENGTH = 8,
    CONN_UNKNOWN = 111,
    CONN_DAISYCHAIN = 117,
    CONN_NXT_COLOR = 118,
    CONN_NXT_DUMB = 119,
    CONN_NXT_IIC = 120,
    CONN_INPUT_DUMB = 121,
    CONN_INPUT_UART = 122,
    CONN_OUTPUT_DUMB = 123,
    CONN_OUTPUT_INTELLIGENT = 124,
    CONN_OUTPUT_TACHO = 125,
    CONN_NONE = 126,
    CONN_ERROR = 127,
    opProgramStart = 0x03,
    opOutputGetType = 0xA0,
    opOutputSetType = 0xA1,
    opOutputReset = 0xA2,
    opOutputStop = 0xA3,
    opOutputPower = 0xA4,
    opOutputSpeed = 0xA5,
    opOutputStart = 0xA6,
    opOutputPolarity = 0xA7,
    opOutputRead = 0xA8,
    opOutputTest = 0xA9,
    opOutputReady = 0xAA,
    opOutputPosition = 0xAB,
    opOutputStepPower = 0xAC,
    opOutputTimePower = 0xAD,
    opOutputStepSpeed = 0xAE,
    opOutputTimeSpeed = 0xAF,
    opOutputStepSync = 0xB0,
    opOutputTimeSync = 0xB1,
    opOutputClearCount = 0xB2,
    opOutputGetCount = 0xB3,
    opOutputProgramStop = 0xB4,
    BUTTON_ID_UP = 0x01,
    BUTTON_ID_ENTER = 0x02,
    BUTTON_ID_DOWN = 0x04,
    BUTTON_ID_RIGHT = 0x08,
    BUTTON_ID_LEFT = 0x10,
    BUTTON_ID_ESCAPE = 0x20,
    // built/dockermake/pxtapp/pxt.h
    DEVICE_EVT_ANY = 0,
    DEVICE_ID_NOTIFY = 10000,
    DEVICE_ID_NOTIFY_ONE = 10001,
    // built/dockermake/pxtapp/pxtbase.h
    PXT_REF_TAG_STRING = 1,
    PXT_REF_TAG_BUFFER = 2,
    PXT_REF_TAG_IMAGE = 3,
    PXT_REF_TAG_NUMBER = 32,
    PXT_REF_TAG_ACTION = 33,
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,
    UInt32LE = 11,
    UInt32BE = 12,
    Float32LE = 13,
    Float64LE = 14,
    Float32BE = 15,
    Float64BE = 16,
    Undefined = 0,
    Boolean = 1,
    Number = 2,
    String = 3,
    Object = 4,
    Function = 5,
    // built/dockermake/pxtapp/pxtconfig.h
    // built/dockermake/pxtapp/pxtcore.h
}
