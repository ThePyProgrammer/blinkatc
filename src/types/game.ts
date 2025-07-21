export interface Aircraft {
  id: string;
  callSign: string;
  type: 'commercial' | 'cargo' | 'private';
  position: { x: number; y: number };
  altitude: number;
  heading: number;
  speed: number;
  targetAltitude: number;
  targetHeading: number;
  targetSpeed: number;
  status: 'enroute' | 'landing' | 'takeoff' | 'holding';
  isSelected: boolean;
  lastCommand?: string;
  commandTime?: number;
}

export interface Command {
  type: 'altitude' | 'heading' | 'speed';
  value: number;
  aircraftId: string;
  timestamp: number;
}

export interface GameState {
  aircraft: Aircraft[];
  score: number;
  collisions: number;
  isPlaying: boolean;
  gameTime: number;
  selectedAircraftId: string | null;
}